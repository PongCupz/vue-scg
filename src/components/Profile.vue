<template>
  <div id="Profile">
    <div class="container-fluid">
      <div class="row page-titles">
          <div class="col-md-6 col-8 align-self-center">
              <h3 class="text-themecolor m-b-0 m-t-0">Profile</h3>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-4 col-xlg-3 col-md-5">
              <div class="card">
                  <div class="card-body">
                                <center class="m-t-30"> <img src="../assets/images/profile.png" class="img-circle" width="150" />
                                    <h4 class="card-title m-t-10">Pongsak Luengon</h4>
                                    <h6 class="card-subtitle">Senior Executive Developer</h6>
                                </center>
                  </div>
                  <div>
                      <hr> </div>
                  <div class="card-body">
                      <small class="text-muted">Date of birth</small>
                      <h6>22 October 1984</h6>
                      <small class="text-muted">Religion</small>
                      <h6>Thai</h6>
                      <small class="text-muted">Email address </small>
                      <h6>ppl123_pong@hotmail.com</h6>
                      <small class="text-muted p-t-30 db">Phone</small>
                      <h6>+66 86 710 8900</h6>
                      <small class="text-muted p-t-30 db">Address</small>
                      <h6>292/407 The Niche Mono Ratchavipha Ratchada Rd. Ladyao Chatuchak Bangkok Thailand 10900</h6>
                      <div class="map-box">
                          <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCs4A-QAbQHXH46bcE43eurOGSwnTaU83Q&q=The Niche Mono Ratchavipha" width="100%" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>
                      </div> <small class="text-muted p-t-30 db">Social Profile</small>
                      <br/>
                      <a href="https://www.facebook.com/pongsak.luengon" target="_blank"><img src="../assets/images/facebook.jpg" alt="user" class="img-circle social" /></a>
                      <a href="https://www.linkedin.com/in/pongsak-luengon-46b514135/" target="_blank"><img src="../assets/images/linkedin.png" alt="user" class="img-circle social" /></a>
                  </div>
              </div>
          </div>
          <div class="col-lg-8 col-xlg-9 col-md-7">
              <div class="card">
                <ul class="nav nav-tabs profile-tab" role="tablist">
                    <li class="nav-item"> <a class="nav-link active" data-toggle="tab" role="tab">SCHOOL Education</a> </li>
                </ul>
                  <div class="tab-content">
                      <div class="tab-pane active" id="home" role="tabpanel">
                          <div class="card-body">
                              <div class="profiletimeline">
                                    <div class="sl-item">
                                        <div class="sl-left"> <img src="../assets/images/buu.png" alt="user" class="img-circle" /> </div>
                                        <div class="sl-right">
                                            <div><span class="text-themecolor">Burapha University</span> <span class="sl-date">2005 - 2007</span>
                                                <p class="m-t-10"><strong> BACHELOR’S DEGREE </strong></p>
                                                <p class="m-t-10"> Faculty of science, Information Technology </p>
                                            </div>
                                        </div>
                                    </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            <div class="card">
                <ul class="nav nav-tabs profile-tab" role="tablist">
                    <li class="nav-item"> <a class="nav-link active" data-toggle="tab" role="tab">WORK Exerience</a> </li>
                </ul>
                  <div class="tab-content">
                      <div class="tab-pane active" id="home" role="tabpanel">
                          <div class="card-body">
                              <div class="profiletimeline">
                                    <div class="sl-item">
                                        <div class="sl-left"> <img src="../assets/images/easy.jpg" alt="user" class="img-circle" /> </div>
                                        <div class="sl-right">
                                            <div><span class="text-themecolor">Easy Compare (Thailand) Co.,Ltd.</span> <span class="sl-date">May 2018 - Present</span>
                                                <p class="m-t-10"><strong>SENIOR EXECUTIVE DEVELOPER </strong></p>
                                                <ul class="listProfile">
                                                    <li>Develop CRM using PHP, AngularJS, Bootstrap and Microsoft SQL</li>
                                                    <li>Support and resolve all application problem</li>
                                                    <li>Working with web master and SG team to integrate system between CRM and website</li>
                                                    <li>Working together with Business Analysis to confi rm functional requirements</li>
                                                    <li>Query report by user request</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                     <div class="sl-item">
                                        <div class="sl-left"> <img src="../assets/images/uni.png" alt="user" class="img-circle" /> </div>
                                        <div class="sl-right">
                                            <div><span class="text-themecolor">Unicity Marketing (Thailand) Co.,Ltd.</span> <span class="sl-date">Jun 2014 - May 2018</span>
                                                <p class="m-t-10"><strong>ASSISTANT IT MANAGER </strong></p>
                                                <ul class="listProfile">
                                                    <li>End user support all company applications</li>
                                                    <li>Develop Navision using C/AL language</li>
                                                    <li>Working with international team to develop APIs using PHP, Restler framework, Postgres SQL, Travis ci, GitHub and Docker</li>
                                                    <li>Develop in-house application using PHP, MySQL and jQuery</li>
                                                    <li>Work closely with Thai and US team for consulting about requirement</li>
                                                    <li>Create reports by Business object and SQL query as users request</li>
                                                    <li>Integrate system between Navision and Commission system</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                     <hr>
                                     <div class="sl-item">
                                        <div class="sl-left"> <img src="../assets/images/newdawn.jpg" alt="user" class="img-circle" /> </div>
                                        <div class="sl-right">
                                            <div><span class="text-themecolor">New Dawn Co.,Ltd.</span> <span class="sl-date">Mar 2013 - May 2014</span>
                                                <p class="m-t-10"><strong>ASSISTANT PROJECT MANAGER</strong></p>
                                                <ul class="listProfile">
                                                    <li>Develop Navision using C/AL language</li>
                                                    <li>Work with customers to solve Navision issues</li>
                                                    <li>Working together with Business Analysis to confi rm functional requirements</li>
                                                    <li>Involve in Navision implement cycle</li>
                                                    <li>Training users for using Navision</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                     <div class="sl-item">
                                        <div class="sl-left"> <img src="../assets/images/navi.jpg" alt="user" class="img-circle" /> </div>
                                        <div class="sl-right">
                                            <div><span class="text-themecolor">NaviWorld (Thailand) Co.,Ltd.</span> <span class="sl-date">Jun 2011 - Mar 2013</span>
                                                <p class="m-t-10"><strong>DEVELOPER</strong></p>
                                                <ul class="listProfile">
                                                    <li>Develop Navision using C/AL language</li>
                                                    <li>Work with customers to solve Navision issues</li>
                                                    <li>Working together with Business Analysis to confirm functional requirements</li>
                                                    <li>Maintain company servers such as Domain, Exchange, Microsoft SQL server ,File server etc</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                     <hr>
                                     <div class="sl-item">
                                        <div class="sl-left"> <img src="../assets/images/saha.jpg" alt="user" class="img-circle" /> </div>
                                        <div class="sl-right">
                                            <div><span class="text-themecolor">Saha Pathana Inter-Holding Public Co.,Ltd.</span> <span class="sl-date">Jan 2008 - Jun 2011</span>
                                                <p class="m-t-10"><strong>IT TECHNICAL </strong></p>
                                                <ul class="listProfile">
                                                    <li>Develop in-house application using PHP , MySQL, Zend Framework,jQuery</li>
                                                    <li>Maintain company website</li>
                                                    <li>Handle issues about hardware, software and Network</li>
                                                    <li>Develop in-house application using PHP, MySQL and jQuery</li>
                                                    <li>Maintain Linux servers such as Ubuntu, Red hat, Fedora, Cent OS,Clear OS, Endian Firewall for provide web server, MySQL server,DHCP server, File server, Gateway fi rewall, Mail server</li>
                                                    <li>Confi guration fi rewall using Linux server and Cisco to block virus,spam mail, junk mail, spyware</li>
                                                    <li>All about admin job</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="card">
                <ul class="nav nav-tabs profile-tab" role="tablist">
                    <li class="nav-item"> <a class="nav-link active" data-toggle="tab" role="tab">SUMMARY OF SKILLS</a> </li>
                </ul>
                  <div class="tab-content">
                      <div class="tab-pane active" id="home" role="tabpanel">
                          <div class="card-body">
                              <div class="profiletimeline">
                                  <div class="sl-item">
                                      <div class="sl-left">  </div>
                                      <div class="sl-right">
                                          <div>
                                                <ul class="listProfile">
                                                    <li>Communiation languages: Thai (Native), English</li>
                                                    <li>Technical skills: Navision, C/AL, SQL, PHP, HTML, CSS, Javascript,C#,Zend framework, Restler framework, jQuery, AngularJS,Bootstrap</li>
                                                    <li>Technical tools: Microsoft Visul Studio, Visual Studio Code, SQL Server Management Studio, Photoshop, illustrator, Dreamweaver,Report builder, Cystal report</li>
                                                    <li>Servers : Linux , Microsoft Windows Server, IIS ,MySQL Sever,MSsql Server, Apache Server, Active Directory, vmware, AWS</li>
                                                    <li>Other tools: Github, Docker, Travis ci, Jira</li>
                                                </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
                <div class="card">
                <ul class="nav nav-tabs profile-tab" role="tablist">
                    <li class="nav-item"> <a class="nav-link active" data-toggle="tab" role="tab">TRAINING</a> </li>
                </ul>
                  <div class="tab-content">
                      <div class="tab-pane active" id="home" role="tabpanel">
                          <div class="card-body">
                              <div class="profiletimeline">
                                  <div class="sl-item">
                                      <div class="sl-left">  </div>
                                      <div class="sl-right">
                                          <div>
                                                <ul class="listProfile">
                                                    <li>Relational Database Management System (RDBMS) with National Science and Technology Development agency (NECTEC)</li>
                                                    <li>DB2 LUW Administration Workshop for SAP with IBM Thailand Co., Ltd.,</li>
                                                    <li>Implementing a Data Warehouse with Microsoft SQL Server 2012 with Iverson</li>
                                                    <li>Architecting on AWS with AWS</li>
                                                </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            <div class="card">
                <ul class="nav nav-tabs profile-tab" role="tablist">
                    <li class="nav-item"> <a class="nav-link active" data-toggle="tab" role="tab">SUMMARY OF QUALIFICATION</a> </li>
                </ul>
                  <div class="tab-content">
                      <div class="tab-pane active" id="home" role="tabpanel">
                          <div class="card-body">
                              <div class="profiletimeline">
                                  <div class="sl-item">
                                      <div class="sl-left">  </div>
                                      <div class="sl-right">
                                          <div>
                                                <ul class="listProfile">
                                                    <li>Excellence skill in technologies information</li>
                                                    <li>Able to work under pressure</li>
                                                    <li>High Responsibility and willing to work hard</li>
                                                    <li>Ability to learn quickly</li>
                                                    <li>General health is excellent</li>
                                                </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul.listProfile {
        list-style-type: square;
        padding-top: 20 px;
    }
    img.social{
        width: 40px;
    }
</style>
